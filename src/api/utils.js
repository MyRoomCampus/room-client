import React from "react";
import BoxComponent from "../components/BoxComponent";
import TextComponent from "../components/TextComponent";
import ImageComponent from "../components/ImageComponent";
import AudioComponent from "../components/AudioComponent";
import VideoComponent from "../components/VideoComponent";
import HouseComponent from "../components/HouseComponent";
const build_tree = (component_json) => {
  let ans = {
    name: "root",
    children: [],
  };
  component_json.forEach((item) => {
    ans.children.push(item);
  });

  return ans;
};

const render_dfs = (props, id) => {
  if (props.name === "root") {
    if (props.children && props.children.length > 0) {
      return (
        <>
          {props.children.map((node) => {
            return render_dfs(node, id);
          })}
        </>
      );
    }
    // else {
    //   return <HouseDetails pid={id}></HouseDetails>;
    // }
  } else if (props.name === "BoxComponent") {
    if (props.children && props.children.length > 0) {
      return (
        <BoxComponent style={props.style} key={props.id}>
          <div>
            {props.children.map((node) => {
              return render_dfs(node, id);
            })}
          </div>
        </BoxComponent>
      );
    } else {
      return <BoxComponent style={props.style} key={props.id}></BoxComponent>;
    }
  } else if (props.name === "TextComponent") {
    return (
      <TextComponent style={props.style} data={props.data} key={props.id} />
    );
  } else if (props.name === "ImageComponent") {
    return (
      <ImageComponent style={props.style} data={props.data} key={props.id} />
    );
  } else if (props.name === "VideoComponent") {
    return (
      <VideoComponent style={props.style} data={props.data} key={props.id} />
    );
  } else if (props.name === "AudioComponent") {
    return (
      <AudioComponent style={props.style} data={props.data} key={props.id} />
    );
  } else if (props.name === "HouseComponent") {
    return (
      <HouseComponent
        style={props.style}
        pid={id}
        key={props.id}
      ></HouseComponent>
    );
  }
};

export const render_json = (component_json, id) => {
  return render_dfs(build_tree(component_json), id);
};

export const getCount = (count) => {
  if (count < 0) {
    return;
  }
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "???";
  } else {
    return Math.floor(count / 10000000) / 10 + "???";
  }
};

export function formatPrice(price) {
  if (price / 100 > 10000) {
    return (
      new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(price / 1000000) + "???"
    );
  } else if (price / 100 > 1000) {
    return (
      new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(price / 100000) + "???"
    );
  } else {
    return new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(price / 100);
  }
}

export function getHouseType(token) {
  switch (token) {
    case 1:
      return "????????????";
    case 2:
      return "??????";
    case 3:
      return "?????????";
    case 4:
      return "??????";
    case 5:
      return "????????????";
    case 6:
      return "??????";
    case 7:
      return "????????????";
    case 8:
      return "??????";
    case 9:
      return "???????????????";
    default:
      return "??????";
  }
}

export const px2vw = (px) => `${(px / 340) * 100}vw`;
export const px2vh = (px) => `${(px / 690) * 100}vh`;
