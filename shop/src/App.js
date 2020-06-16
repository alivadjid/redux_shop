import React, { Component } from 'react';
import './App.css';
import Table1 from './Components/Table';
import Modal from './Components/mdlConfChoose';
import axios from 'axios';
class App extends Component{  
  constructor(props) {
    super(props);
    this.state = { value: '', shReset: false, value1: '', currency: '', curR: '', money: 0};
    this.info = '';
    this.handleChange = this.handleChange.bind(this);
    this.onChangeSpeed = this.onChangeSpeed.bind(this);
    this.reset = this.reset.bind(this);
    //this.price = 0;
    this.hdReset = this.hdReset.bind(this);
    this.slctChnge = this.slctChnge.bind(this);

    this.parseXML = this.parseXML.bind(this);
  }
  parseXML(xmlString) {
    var parser = new DOMParser();
    //parser a simple invalid XML source to get namespace of <parserror>
    var docError = parser.parseFromString('INVALID', 'text/xml');
    var parsererrorNS = docError.getElementsByTagName("parsererror")[0].namespaceURI;
    //Parse xmlString
    // (XMLDocument object)
    var doc = parser.parseFromString(xmlString,'text/xml');
    if (doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length>0) {
      throw new Error('Error parsing XML');
    }
    return doc;
    // var dom = null;
    // if (window.DOMParser) {
    //   try {
    //     dom = (new DOMParser()).parseFromString(xml, "text/xml");
    //   }
    //   catch (e) { dom = null; }
    // }
    // else if (window.XMLHttpRequest) {
    //   try {
    //     dom = new XMLHttpRequest('Microsoft.XMLDOM');
    //     dom.async = false;
    //     if (!dom.loadXML(xml))
    //       window.alert(dom.parseError.reason + dom.parseError.srcText);

    //   }
    //   catch (e) { dom = null; }
    // }
    // else  
    //   alert("Cannot parse xml string!")
    // return dom;
  }
  hdReset() {
		this.setState({shReset: false});
	}
  onChangeSpeed(price) {
    let price1 = Number(this.state.value - price).toFixed(2);

    this.setState({ value: price1})
  }
  handleChange(event) {
    this.setState({ value: event.target.value }); 
  }
  reset() {
    if ( this.state.value == 0 ) {
      console.log('нечего выводить')
      this.setState({value: ''});
    } else
    var val = this.state.value; 
    this.setState({shReset: true});
    this.setState({value1: val})
    this.setState({value: ''});
    var currency = document.getElementById("inGrSel01");
    var value = currency.value;
    this.setState({currency: value})

    try {
    axios
      .get('https://www.cbr-xml-daily.ru/daily_utf8.xml')
      .then(response => {
        let a = response.data

      // const parser = new DOMParser();
      // let xmlDoc = parser.parseFromString(this.info, "text/html")
      // console.log(xmlDoc)

      // let aa = this.state
      // var USD = xmlDoc.getElementsById("R01235")
      
      // console.log(USD)
        var doc;
        try {
          //XMLDocumetn object
          doc = this.parseXML(a);
          console.log(doc.documentElement);
        } catch (e) {
          console.log(e)
          return;
        }
        //resetLog()

        //Element object 
        var rootElement = doc.documentElement;

        var children = rootElement.childNodes;
        console.log(children)
        //console.log(children.getElementById('R01235'))
        for(var i=0; i< children.length; i++) {
          var child = children[i];
          // 
          //console.log(child.id)

          if(child.nodeType == Node.ELEMENT_NODE) {
            //console.log(child)
            //var rollNoEl = child.textContent;
            //console.log(rollNoEl);
           // console.log(child.id)
            //var bc = child.id[0]
            //console.log(child.getElementById("R01820")[0])
            
            //console.log(num)
            var numCodeElement = child.getElementsByTagName("NumCode")[0];
           var charCodeElement = child.getElementsByTagName("CharCode")[0];
           var nominalElement = child.getElementsByTagName("Nominal")[0];
           var valueElement = child.getElementsByTagName("Value")[0] 
           var idElement = child.attributes.ID.textContent;
           console.log(idElement)
           
           //var id = idElement.textContent;
           var numCode = numCodeElement.textContent;
           var charCode = charCodeElement.textContent;
           var nominal = nominalElement.textContent;
           var value = valueElement.textContent;
            //var roll = rollNoEl.textContent;
            //console.log(id);
            console.log(value);
           //console.log(roll);
      
           
          //  appendLog("rollNo: " + rollNo);
          //  appendLog("fullName: " + fullName);
          //  appendLog("nickName: " + nickName);
          //  appendLog("marks: " + marks);

          }
        }
      })
        //var dom = this.parseXml(this.info)
        //console.log(dom)
        
      //   const parser = new DOMParser();
      //   let xmlDoc = parser.parseFromString(this.info, "text/xml")
      //   console.log(xmlDoc)
      //   try {
      //     var dom1= new  XMLHttpRequest();
      //     dom1.async = false;
      //     if
      //     console.log(dom1)
      //   }
      //   catch (e) { console.log(e)}
      // });
     
      
      //.catch(error => console.log(error));
      // console.log(this.info);
      // const parser = new DOMParser();
      // let xmlDoc = parser.parseFromString(this.info, "text/xml")
      // console.log(xmlDoc)
      // console.log(typeof(xmlDoc));
      // //let aa = this.state
      // var USD = xmlDoc.getElementsByTagName("R01235")
      // console.log(USD)
    } catch(err) {
    console.log(err)
    }
   
    
  }
  slctChnge() {
    var curr = document.getElementById("inGrSel01").value;
    
    this.setState({curR: curr});
    
  }
  render() {
    
    const mdReset = this.state.shReset ? (
      <Modal>
      <div className="modalGet">
        <div className="modalWindow">
          <div className="modalHeader">
            <div className="modalTitle">
            </div>
            <div className="modalBody">
              <p> {this.state.value1} {this.state.currency}</p>
            <div>
            Получите сдачу
            </div>
            </div>
            <div className="modalFooter">
            <button onClick={this.hdReset} className="btn btn-success">Спасибо!
            </button>
            </div>
         </div> 
       </div>
     </div>
   </Modal> 
  ) : null;

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-group col-xs-12">
          <div className="input-group mb-3">          
            <select className="custom-select" onChange={this.slctChnge} id="inGrSel01">
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
            <input type="text" 
            className="form-control" 
            placeholder="Введите значение" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2"
            value={this.state.value} 
            onChange={this.handleChange}/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" 
            type="button" 
            id="button-addon2"
            onClick={this.reset}
            >Сбросить
            </button>
            </div>
          </div>
        </div>
        {mdReset}
        <p>
          Вендинговый аппарат
        </p>
        <div className="container">
          <Table1 data={this.state.value} dataCur={this.state.curR} onChangeSpeed={this.onChangeSpeed}/>
        </div>
      </header>
    </div>
  );
  }
}

export default App;
