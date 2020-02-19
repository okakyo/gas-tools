function doGet() {
  const template = 'template/index';
  const output= HtmlService.createTemplateFromFile(template).evaluate();
  output.setTitle("サンプルツール")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return output;
}

function getSpreadSheetInfo(){
  const sheetId="";
  const sheet=
}

function doPost(){
  return ;
}




