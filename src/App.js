import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import "./App.css";
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID -BdBx3hcFwWXWIVSlqLcu4Op9eRFN3Zw4oIyGZqQ3Mg"
      }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <div>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
