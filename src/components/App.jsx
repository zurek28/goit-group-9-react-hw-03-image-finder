import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';
import { ImageGallery } from './ImageGallery/ImageGallery';

const INITIAL_STATE = {
  search: '',
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  submitHandle = evt => {
    evt.preventDefault();
    this.setState({ search: evt.target.elements[1].value });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar className="Searchbar" onSubmit={this.submitHandle} />

        <ImageGallery />
      </div>
    );
  }
}
