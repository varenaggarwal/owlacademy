import { createServer, Model, RestSerializer } from "miragejs";
import { apiVideoData } from "./apiVideoData";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      videos: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 100;
      this.resource("videos");
    },

    seeds(server) {
      apiVideoData.map((video) => server.create("video", video));
    },
  });
}
