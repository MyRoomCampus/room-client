import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMusicList } from "../../store/slice/demoSlice";
import { Card, Avatar, Popover } from "@douyinfe/semi-ui";
import { IconInfoCircle } from "@douyinfe/semi-icons";
function DemoPage(props) {
  console.log("789");
  const { Meta } = Card;

  const { musicList } = useSelector((state) => {
    return {
      musicList: state.music.musicList,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(musicList.length);
    if (!musicList.length) {
      dispatch(fetchAsyncMusicList());
    }
  }, [dispatch, musicList.length]);
  return (
    <>
      <div>
        {musicList.length &&
          musicList.map((item, index) => {
            return (
              <Card
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
          })}
      </div>
    </>
  );
}

export default React.memo(DemoPage);
