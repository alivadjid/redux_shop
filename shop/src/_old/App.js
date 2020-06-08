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




         function copyStyles(sourceDoc, targetDoc) {
          Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
            if (styleSheet.cssRules) { // true for inline styles
              const newStyleEl = sourceDoc.createElement('style');
        
              Array.from(styleSheet.cssRules).forEach(cssRule => {
                newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
              });
        
              targetDoc.head.appendChild(newStyleEl);
            } else if (styleSheet.href) { // true for stylesheets loaded from a URL
              const newLinkEl = sourceDoc.createElement('link');
        
              newLinkEl.rel = 'stylesheet';
              newLinkEl.href = styleSheet.href;
              targetDoc.head.appendChild(newLinkEl);
            }
          });
        }
        
        
        class MyWindowPortal extends React.PureComponent {
          constructor(props) {
            super(props);
            this.containerEl = document.createElement('div'); // STEP 1: create an empty div
            this.externalWindow = null;
            this.state ={
              imageOne : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
            }
          }
        
          componentDidMount() {
            // STEP 3: open a new browser window and store a reference to it
            this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');
        
            // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
            this.externalWindow.document.body.appendChild(this.containerEl);
            
            this.externalWindow.document.title = 'A React portal window';
            copyStyles(document, this.externalWindow.document);
            
            // update the state in the parent component if the user closes the 
            // new window
            this.externalWindow.addEventListener('beforeunload', () => {
              this.props.closeWindowPortal();
            });
          }
        
          componentWillUnmount() {
            // This will fire when this.state.showWindowPortal in the parent component becomes false
            // So we tidy up by just closing the window
            this.externalWindow.close();
          }
          
          render() {
            // STEP 2: append props.children to the container <div> that isn't mounted anywhere yet
            return ReactDOM.createPortal(this.props.children, this.containerEl);
          }
        }
        
        class App extends React.PureComponent {
          constructor(props) {
            super(props);
            
            this.state = {
              counter: 0,
              showWindowPortal: false,
              imageOne : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
              
            };
            
            this.toggleWindowPortal = this.toggleWindowPortal.bind(this);
            this.closeWindowPortal = this.closeWindowPortal.bind(this);
          }
        
          componentDidMount() {
            window.addEventListener('beforeunload', () => {
              this.closeWindowPortal();
            });
            
            window.setInterval(() => {
              this.setState(state => ({
                counter: state.counter + 1,
              }));
            }, 1000);
          }
          
          toggleWindowPortal() {
            this.setState(state => ({
              ...state,
              showWindowPortal: !state.showWindowPortal,
            }));
          }
          
          closeWindowPortal() {
            this.setState({ showWindowPortal: false })
          }
          
          render() {
            return (
              <div>
                <h1>Counter: {this.state.counter}</h1>
                
                <button onClick={this.toggleWindowPortal}>
                  {this.state.showWindowPortal ? 'Close the' : 'Open a'} Portal
                </button>
                {this.state.showWindowPortal && (
                  <MyWindowPortal closeWindowPortal={this.closeWindowPortal} >
                    <h1>Counter in a portal: {this.state.counter}</h1>
                    <p>Even though I render in a different window, I share state!</p>
                     <img src={this.state.imageOne} alt="Pizza" width="100" height="100"/>
                    <button onClick={() => this.closeWindowPortal()} >
                      Close me!
                    </button>
                  </MyWindowPortal>
                )}
              </div>
            );
          }
        }
        
        ReactDOM.render(<App/>, document.getElementById('root'));
        


        const UNIT = {
  KPH: 'Км/ч',
  MPH: 'Миль/ч'
};

// максимальная разрешённая скорость в населённом пункте в км/ч
const MAX_SPEED_IN_CITY_IN_KPH = 60

function SpeedDetector(props) {
  const unit = props.unit;
  if (props.speed >= props.maxSpeed) {
    return <div>Скорость в {UNIT[unit]} превышена!</div>;
  }
  return <div>Скорость в {UNIT[unit]} не превышена.</div>;
}

function isValidSpeed(value){
  if(value !== null && value !== '' && value !== undefined){
    let intValue = parseInt(value);
    return !(isNaN(intValue) || !isFinite(intValue));
  }  
  return false
}

function convertToKph(mph) {
  return mph * 1.61;
}

function convertToMph(kph) {
  return kph / 1.61;
}

function сonvertSpeed(value, convertor) {  
  if(isValidSpeed(value)){
    const intValue = parseInt(value)
    let converted = convertor(intValue);
    let rounded = Math.round(converted * 100) / 100
    return rounded.toString()
  }  
  return '';
}

class SpeedSetter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChangeSpeed(e.target.value);
  }

  render() {
    let speed = this.props.speed;
    let unit = this.props.unit;
    return (
      <p>
        <span>Введите скорость в "{UNIT[unit]}": </span>
        <input value={speed} onChange={this.onChange}/>
      </p>
    );
  }
}

class SpeedRadar extends React.Component {
  constructor(props){
    super(props);
    this.onChangeSpeedInKph = this.onChangeSpeedInKph.bind(this);
    this.onChangeSpeedInMph = this.onChangeSpeedInMph.bind(this);
    this.state = {speed: 0, unit: 'KPH'};
  }  
  
  onChangeSpeedInKph(speed) {
    this.setState({unit: 'KPH', speed});
  }
  
  onChangeSpeedInMph(speed) {
    this.setState({unit: 'MPH', speed});
  }
  
  render() {
    const unit = this.state.unit;
    const speed = this.state.speed;
    const kph = unit === 'MPH' ? сonvertSpeed(speed, convertToKph) : speed;
    const mph = unit === 'KPH' ? сonvertSpeed(speed, convertToMph) : speed;

    return (
      <div>
        <SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph}/>
        <SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph}/> 
        <SpeedDetector speed={kph} unit="KPH" maxSpeed={MAX_SPEED_IN_CITY_IN_KPH}/>
      </div>
    );
  }
}

ReactDOM.render(<SpeedRadar />, document.getElementById('root'));

///////////////////////////////********************///////////////////// */



const UNIT = {
  KPH: 'Км/ч',
  MPH: 'Миль/ч'
};

// максимальная разрешённая скорость в населённом пункте в км/ч
const MAX_SPEED_IN_CITY_IN_KPH = 60

function SpeedDetector(props) {
  const unit = props.unit;
  if (props.speed >= props.maxSpeed) {
    return <div>Скорость в {UNIT[unit]} превышена!</div>;
  }
  return <div>Скорость в {UNIT[unit]} не превышена.</div>;
}

function isValidSpeed(value){
  if(value !== null && value !== '' && value !== undefined){
    let intValue = parseInt(value);
    return !(isNaN(intValue) || !isFinite(intValue));
  }  
  return false
}

function convertToKph(mph) {
  return mph * 1.61;
}

function convertToMph(kph) {
  return kph / 1.61;
}

function сonvertSpeed(value, convertor) {  
  if(isValidSpeed(value)){
    const intValue = parseInt(value)
    let converted = convertor(intValue);
    let rounded = Math.round(converted * 100) / 100
    return rounded.toString()
  }  
  return '';
}

class SpeedSetter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChangeSpeed(e.target.value);
  }

  render() {
    let speed = this.props.speed;
    let unit = this.props.unit;
    return (
      <p>
        <span>Введите скорость в "{UNIT[unit]}": </span>
        <input value={speed} onChange={this.onChange}/>
      </p>
    );
  }
}

class SpeedRadar extends React.Component {
  constructor(props){
    super(props);
    this.onChangeSpeedInKph = this.onChangeSpeedInKph.bind(this);
    this.onChangeSpeedInMph = this.onChangeSpeedInMph.bind(this);
    this.state = {speed: 0, unit: 'KPH'};
  }  
  
  onChangeSpeedInKph(speed) {
    this.setState({unit: 'KPH', speed});
  }
  
  onChangeSpeedInMph(speed) {
    this.setState({unit: 'MPH', speed});
  }
  
  render() {
    const unit = this.state.unit;
    const speed = this.state.speed;
    const kph = unit === 'MPH' ? сonvertSpeed(speed, convertToKph) : speed;
    const mph = unit === 'KPH' ? сonvertSpeed(speed, convertToMph) : speed;

    return (
      <div>
        <SpeedSetter unit="KPH" speed={kph} onChangeSpeed={this.onChangeSpeedInKph}/>
        <SpeedSetter unit="MPH" speed={mph} onChangeSpeed={this.onChangeSpeedInMph}/> 
        <SpeedDetector speed={kph} unit="KPH" maxSpeed={MAX_SPEED_IN_CITY_IN_KPH}/>
      </div>
    );
  }
}

ReactDOM.render(<SpeedRadar />, document.getElementById('root'));