import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactsList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value.trim(),
    });
  };

  addNewContact = name => {
    const contact = {
      id: uuidv4(),
      name,
    };

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  handleNameSubmit = e => {
    e.preventDefault();

    this.reset();
  };

  reset() {
    this.setState({ name: '' });
    console.log('this.state', this.state);
  }

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <form onSubmit={this.handleNameSubmit}>
          <label>
            Name
            <input
              name="name"
              value={this.state.name}
              onChange={this.nameInputChange}
            />
          </label>

          <button type="submit" onClick={() => this.addNewContact(name)}>
            Add contact
          </button>
        </form>

        <ContactsList contacts={contacts} />
      </>
    );
  }
}

export default App;
