import { createServer, Model, RestSerializer } from "miragejs";
import { apiVideoData } from "./apiVideoData";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      products: Model,
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("products");
    },

    seeds(server) {
      apiVideoData.map((product) => server.create("product", product));
    },
  });
}
