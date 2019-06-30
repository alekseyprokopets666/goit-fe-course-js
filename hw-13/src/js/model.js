export default class Model {
    constructor() {
        if (JSON.parse(localStorage.getItem("bookmark")) == null) {
            this.bookmark = [];
        } else {
            this.bookmark = JSON.parse(localStorage.getItem("bookmark"));
        }

    }
    isValidUrl(url) {
        let re = /^(ftp|http|https):\/\/[^ "]+$/;
        if (re.test(url)) {
            return true;
        } else {
            return false;
        }
    }
    toLocalstore() {
        const item = "bookmark";
        localStorage.setItem(item, JSON.stringify(this.bookmark));
        this.bookmark = JSON.parse(localStorage.getItem(item));
    }
    addItem(Url, callback) {
        if (!this.isValidUrl(Url)) {
            alert('This is invalid url');
        } else {


            const data = {
                key: '5d09dcd66cccb0feccde63fa107fadd9e5d43a5ae60ef',
                q: Url,
            }
            let preview;
            fetch('https://api.linkpreview.net', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(data),
                })
                .then(res => res.json())
                .then(response => {
                    preview = response;
                    if (this.IsUniqueByKeyInArrOfObjs('url', this.bookmark, response.url)) {
                        if (preview.error == undefined) {
                            preview.id = Date.now();
                            this.bookmark.unshift(response);
                            this.toLocalstore();
                            callback('#bookmark', '#bookmark-list', this.bookmark);
                        } else {
                            alert('impossible to add this url');
                        }
                    } else {
                        alert('This url already added');
                    }
                })
                .catch(error => console.log('ERROR ' + error));
        }
    }

    IsUniqueByKeyInArrOfObjs(key, arrOfObj, item) {

        if (arrOfObj.find(el => el[key] == item) != undefined) {
            return false
        } else {
            return true;
        }
    }

    removeItem(id, callback) {

        this.bookmark = this.bookmark.filter(el => el.id != id);
        this.toLocalstore();
        callback('#bookmark', '#bookmark-list', this.bookmark);
    }


}