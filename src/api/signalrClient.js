import { HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';
import { baseUrl } from './config';

export class SignalRClient {
  url = `${baseUrl}/hub/project`;

  onReceiveVisit = () => console.warn('onReceiveVisit not implemented');
  onReceiveMessage = () => console.warn('onReceiveMessage not implemented');
  onReceivePreOffer = () => console.warn('onReceivePreOffer not implemented');
  onReceivePreAnswer = () => console.warn('onReceivePreAnswer not implemented');
  onReceiveIceCandidate = () => console.warn('onReceiveIceCandidate not implemented');
  onReceiveOffer = async () => console.warn('onReceiveOffer not implemented');
  onReceiveAnswer = () => console.warn('onReceiveAnswer not implemented');

  constructor(token) {
    this.connection = new HubConnectionBuilder()
      .withUrl(this.url, { accessTokenFactory: () => token })
      .build();
  }

  isConnected() {
    return this.connection.state === HubConnectionState.Connected;
  }

  async stop() {
    await this.connection.stop();
  }

  async startUp() {
    if (this.isConnected()) {
      return console.error('already connected');
    }
    
    await this.connection.start();
    if (!this.isConnected()) {
      return false;
    }

    this.connection.on('ReceiveVisit', (clientInfos) => {
      this.onReceiveVisit(clientInfos);
    });

    this.connection.on('ReceiveMessage', (user, message) => {
      this.onReceiveMessage(user, message);
    });

    this.connection.on('receivePreOffer', (offerKey) => {
      this.onReceivePreOffer(offerKey);
    });

    this.connection.on('receivePreAnswer', (offerKey, answer) => {
      this.onReceivePreAnswer(offerKey, answer);
    });

    this.connection.on('ReceiveIceCandidate', (offerKey, candidate) => {
      this.onReceiveIceCandidate(offerKey, candidate);
    });

    this.connection.on('ReceiveOffer', (offerKey, offer) => {
      const obj = JSON.parse(offer);
      void this.onReceiveOffer(offerKey, obj);
    });

    this.connection.on('ReceiveAnswer', (offerKey, answer) => {
      const obj = JSON.parse(answer);
      this.onReceiveAnswer(offerKey, obj);
    });

    return true;
  }

  // ------------------------------------------------------------------

  sendVisit(houseId) {
    if (!this.isConnected()) {
      return console.error('not connected');
    }

    this.connection.invoke('SendVisit', parseInt(houseId)).catch(err => {
      return console.error(err.toString());
    });
  }

  sendObserve(houseId) {
    if (!this.isConnected()) {
      return console.error('not connected');
    }

    this.connection.invoke('SendObserve', houseId).catch(err => {
      return console.error(err.toString());
    });
  }

  sendMessage(user, msg) {
    if (!this.isConnected()) {
      return console.error('not connected');
    }

    this.connection.invoke('SendMessage', msg).catch(err => {
      return console.error(err.toString());
    });
  }

  sendIceCandidateAnswer(offerKey, candidate) {
    if (!this.isConnected()) {
      return console.error('not connected');
    }

    this.connection.invoke('SendIceCandidateAnswer', offerKey, JSON.stringify(candidate)).catch(err => {
      return console.error(err.toString());
    });
  }

  sendPreOffer(offerKey, connectionId){
    if (!this.isConnected()){
      return console.error('not connected');
    }

    this.connection?.invoke('SendPreOffer', offerKey, connectionId).catch(err => {
      return console.error(err.toString());
    })
  }

  sendPreAnswer(offerKey, agree){
    if (!this.isConnected()){
      return console.error('not connected');
    }

    this.connection?.invoke('SendPreAnswer', offerKey, agree).catch(err => {
      return console.error(err.toString());
    })
  }

  sendOffer(user, offer) {
    if (!this.isConnected()) {
      return console.error('not connected');
    }

    this.connection.invoke('SendVideoOffer', user, JSON.stringify(offer)).catch(err => {
      return console.error(err.toString());
    });
  }

  sendAnswer(user, answer) {
    if (!this.isConnected()) {
      return console.error('not connected');
    }

    this.connection.invoke('SendVideoOffer', user, JSON.stringify(answer)).catch(err => {
      return console.error(err.toString());
    });
  }
}
