

module.exports = {
    OBJtoXML:function (obj) {
      obj = Array.isArray(obj)?{"tuple":obj}:obj; 
        var xml = '';
        for (var prop in obj) {
          xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
          if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
              xml += "<" + prop + ">";
              xml += this.OBJtoXML(new Object(obj[prop][array]));
              xml += "</" + prop + ">";
            }
          } else if (typeof obj[prop] == "object") {
            xml += this.OBJtoXML(new Object(obj[prop]));
          } else {
            xml += obj[prop];
          }
          xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
        }
        var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
        return xml
      },
      jsontoxml:function(obj){   
         
        return `<SOAP:Envelope
        xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/">
        <SOAP:Header
          xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/">
          <header
            xmlns:SOAP="http://schemas.xmlsoap.org/soap/envelope/"
            xmlns="http://schemas.cordys.com/General/1.0/">
            <msg-id>B379DFE4-328D-A1ED-A5C4-BCA55F9FAA51</msg-id>
            <messageoptions noreply="true"/>
          </header>
        </SOAP:Header>
        <SOAP:Body><test>
        ${this.OBJtoXML(obj)}
        </test>
        </SOAP:Body>
      </SOAP:Envelope>`
    }
}