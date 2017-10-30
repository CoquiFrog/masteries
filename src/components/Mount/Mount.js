export default class Mount extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {product: []};
    }
  
    componentDidMount() {
      this.UserList();
    }
  
    UserList() {
      $.getJSON('https://randomuser.me/api/')
        .then(({ results }) => this.setState({ product: results }));
    }
  
    render() {
      const products = this.state.products.map((item, i) => (
        <div>
          <h1>{ item.id }</h1>
          <span>{ item.price }, { item.title }</span>
        </div>
      ));
  
      return (
      <div>
          <div>{ products }</div>
        </div>
      );
    }
  }