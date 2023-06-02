import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
