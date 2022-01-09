import { DeviceEvent } from "api/device-event";
import moment from "moment-timezone";
import { useCallback, useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";

const Timeline = () => {
  const [items, setItems] = useState<TimelineItemModel[]>();
  const fetchDeviceEvents = useCallback(async () => {
    const response = await DeviceEvent.getDeviceEvents();
    if (response.status === 200) {
      response.data.map((event) => {
        setItems((prev) => {
          return Object.assign([], prev, {
            title: moment(event.createdAt)
              .tz("Asia/Seoul")
              .format("YYYY-MM-DD HH:mm:ss"),
            cardTitle: event.category,
            cardSubtitle: `버스 ID: ${event.drvierDeviceId}, 유저 ID: ${event.userDeviceId}, 정류장 ID: ${event.busStopId}`,
          });
        });
      });
      setItems(response.data);
    }
  }, []);
  useEffect(() => {
    fetchDeviceEvents();
  }, [fetchDeviceEvents]);

  return (
    <div className="max-screen relative top-8vh">
      <div style={{ width: "100vw", height: "92vh" }}>
        <Chrono
          items={items}
          mode="VERTICAL"
          slideShow
          slideItemDuration={4000}
          cardHeight={150}
          scrollable={{ scrollbar: false }}
        />
      </div>
    </div>
  );
};

export default Timeline;
