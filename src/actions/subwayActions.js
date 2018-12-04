import { GET_ALL_SUBWAYS, UPDATE_STATUS } from "./types";
import Mta from "mta-gtfs";
//I think it would be better to use GtfsRealtimeBindings than Mta for the project
const GtfsRealtimeBindings = require("gtfs-realtime-bindings");
const request = require("request");
const fs = require("fs");
const FEED_ID = 0;

const mta_key = "7b58c4cff16a70fd01f0b1eb08a9e99e";
const mta = new Mta({
  key: mta_key
});

let requestSettings = {
  method: "GET",
  url: `http://datamine.mta.info/mta_esi.php?key=${mta_key}&feed_id=${FEED_ID}`,
  encoding: null
};

export const getAllSubways = () => async dispatch => {
  // request(requestSettings, (error, response, body) => {
  //   if (!error && response.statusCode == 200) {
  //     const feed = GtfsRealtimeBindings.FeedMessage.decode(body);
  //     console.log("feed: ", feed);
  //   }
  // });
  const res = await mta.status("subway").then(function(result) {
    console.log("result: ", result);
    return result;
  });

  dispatch({
    type: GET_ALL_SUBWAYS,
    payload: res
  });
};

export const updateStatus = () => async dispatch => {
  console.log("mta: ", mta);
  //get all subway stop info
  const res = await mta
    .stop(635)
    .then(function(result) {
      console.log("stops: ", result);
      return result;
    })
    .catch(function(err) {
      console.log("err: ", err);
    });
  //   const res = await mta.schedule(null, 1).then(function(result) {
  //     console.log("update status result: ", result);
  //     return result;
  //   });

  dispatch({
    type: UPDATE_STATUS,
    payload: res
  });
};
