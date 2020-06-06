<img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
        <span>
				<button><img src={bonaqua} alt="aqua" onClick={this.myfunction} /></button>
        </span>
        


        render() {
          return(
           <table className="table table-bordered">
             <thead className="thead-dark">
               <tr>
                 <th scrope="col">#</th>
                 <th>Товар</th>
                 <th>Название</th>
                 <th>Цена</th>
                 <th>Количество</th>
               </tr>
             </thead>
             <tbody>
             { this.props.data.map(item => (
               <tr key={item.id}>
                 <td>{item.id}</td>
                 <td><button><img src={item.picture} alt="aqua" onClick={this.myfunction} /></button></td>
                 <td>{item.name}</td>
                 <td>{item.price}</td>
                 <td>{item.quality}</td>
               </tr>
             ))}
             </tbody>
           </table>
         )
         }