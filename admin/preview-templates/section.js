import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        ${${entry.getIn(["data", "showTitle"], false) &&
            <h2>${entry.getIn(["data", "title"], null)}</h2>
        }

        ${this.props.widgetFor("body")}
      </main>
    `;
  }
});

export default Page;
