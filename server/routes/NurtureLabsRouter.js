const path = require("path");
const qs = require("query-string");
const BACKEND_URL =
  process.env.NURTURELABS_BACKEND_SERVER || "http://2a150c14.ngrok.io/v1/";
const config = require("../../config.json");
const constants = require("../../app/constants");
import BaseRouter from "./BaseRouter";

let router = new BaseRouter();

// import { store } from "../app/store";
import configureStore from "../../app/store/configureStore";
import { match } from "react-router";
import { getRoutes } from "../../app/Routes";
import renderer from "../helper/renderer";
import { SET_IS_MOBILE } from "../../app/actions/types";

router.get("*", (req, res, next) => {
  const promises = match(
    { routes: getRoutes(), location: req.url },
    (err, redirectLocation, renderProps) => {
      const initialState = {};
      const store = configureStore(initialState, req);
      if (err) return next(err);

      if (redirectLocation) {
        return res.redirect(
          302,
          redirectLocation.pathname + redirectLocation.search
        );
      }

      if (!renderProps) {
        return res.redirect(302, "/404");
      }
      //console.log('vivek veivek')
      //console.log(req.headers['source'])
      store.dispatch({
        type: SET_IS_MOBILE,
        payload: req.headers["source"],
      });

      const components = renderProps.components;
      const selectedComponent = components[components.length - 1];
      const loadDataPromise =
        (selectedComponent && selectedComponent.loadData) ||
        (() => Promise.resolve());

      loadDataPromise(store)
        .then(() => {
          const content = renderer(req, store, renderProps);
          res.send(content);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  );
});

export { router };
