import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    const showTitle = entry.getIn(["data", "showTitle"], false);
    const title = entry.getIn(["data", "title"], null);
    const backgroundImage = entry.getIn(["data", "background-image"], null);

    return html`
      <section style={{ backgroundImage: 'url(${backgroundImage})' }}>
        <div className="inner">
            ${showTitle &&
                '<h2>' + entry.getIn(["data", "title"], null) + '</h2>'
            }

            ${this.props.widgetFor("body")}
        </div>
      </section>
    `;
  }
});

export default Page;
