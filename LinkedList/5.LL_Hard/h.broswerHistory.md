```ts
class DLNode {
    site: string;
    next: DLNode;
    back: DLNode;

    constructor(site: string, next: DLNode = null, back: DLNode = null){
        this.site = site
        this.next = next
        this.back = back
    }
}

class BrowserHistory {
    current: DLNode;
    head: DLNode

    constructor(homepage: string){
        let newHomePage = new DLNode(homepage)
        this.current = newHomePage
        this.head = newHomePage
    }

    visit(site: string){
        let newNode = new DLNode(site)
        this.current.next = newNode
        newNode.back = this.current
        this.current = newNode
    }

    getCurrentNode(){
        return this.current
    }

    homePage(head: BrowserHistory){
        return this.head.site
    }

    getNextSite(){
        let nextSite = ""
        if(this.current.next !== null){
            nextSite = this.current.next.site
            this.current = this.current.next
        }
        return nextSite
    }

    getPreviousSite(){
        let prevSite = ""
        if( this.current.back !== null ) {
            prevSite = this.current.back.site
            this.current = this.current.back
        }
        return prevSite
    }
}


export function CallBrowserHistory(){
    let bh = new BrowserHistory("google.com")
    console.log(bh.getCurrentNode().site)

    bh.visit("john.com")
    console.log(bh.getCurrentNode().site)

    bh.visit("cena.com")
    console.log(bh.getCurrentNode().site)

    bh.visit("ram.com")
    console.log(bh.getCurrentNode().site)

    console.log(bh.getNextSite()) // should print empty
    console.log(bh.getNextSite()) // should print empty

    console.log(bh.getPreviousSite()) // cena.com
    console.log(bh.getPreviousSite()) // john.com

    console.log(bh.getNextSite()) // cena.com
    console.log(bh.getNextSite()) // ram.com
}
```
