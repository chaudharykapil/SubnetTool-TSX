export const settings = {
  "folderstructure":{
    "url": "http://127.0.0.1:8000/getfolderstructure",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({})
  },
  "filedata":{
    "url": "http://127.0.0.1:8000/getfiledata/",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({})
  }
}