import React, { Component } from "react";

export default class chat extends Component {
  componentDidMount() {
    (function (d, m) {
      var kommunicateSettings = {
        appId: "1ce59ef2c4a85bc0d6d568dc52cf2679e",
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
  }
  render() {
    return <></>;
  }
}
