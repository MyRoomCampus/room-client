import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMusicList } from "../../store/slice/demoSlice";
import { Card, Avatar, Popover } from "@douyinfe/semi-ui";
import { IconInfoCircle } from "@douyinfe/semi-icons";
import { Spin } from "@douyinfe/semi-ui";
import { IconLoading } from "@douyinfe/semi-icons";

function DemoPage(props) {
  const { Meta } = Card;
  let params = {
    uid: 45441555,
    type: 1,
  };
  const { musicList, showLoading } = useSelector((state) => {
    return {
      musicList: state.music.musicList,
      showLoading: state.music.showLoading,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(musicList.length);
    console.log(params);
    if (!musicList.length) {
      dispatch(fetchAsyncMusicList(params));
    }
  }, []);
  return (
    <>
      <div>
        {showLoading ? (
          <Spin indicator={<IconLoading />} />
        ) : (
          musicList.map((item, index) => {
            return (
              <Card
                key = {index}
                shadows="always"
                style={{ maxWidth: 360 }}
                bodyStyle={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Meta
                  title={item.song.name}
                  avatar={
                    <Avatar
                      alt="Card meta img"
                      size="default"
                      src={item.song.al.picUrl}
                    />
                  }
                />
                <Popover
                  position="top"
                  showArrow
                  content={
                    <article style={{ padding: 6 }}>这是一个 Card</article>
                  }
                >
                  <IconInfoCircle
                    style={{ color: "var(--semi-color-primary)" }}
                  />
                </Popover>
              </Card>
            );
          })
        )}
      </div>
    </>
  );
}

export default React.memo(DemoPage);
