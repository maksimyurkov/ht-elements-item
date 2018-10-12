"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/paper-button";
import "@01ht/ht-user-avatar";

class HTElementsItemAuthor extends LitElement {
  render() {
    const { authorData } = this;
    return html`
    ${SharedStyles}
    <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        a {
          display:block;
        }

        ht-user-avatar {
          margin-right:8px;
        }

        paper-button {
          margin:0;
          width:100%;
          background: #fff;
          color: #424242;
        }

        #container {
            display:flex;
        }

        #author {
          display:flex; 
          flex-wrap: wrap;
          align-items:center;
          margin:0;
          color: var(--secondary-text-color);
        }

        #author a#name:hover {
          text-decoration:underline;
        }

        #name {
          margin-right:16px;
        }

        #portfolio {
          text-decoration: none;
        }
    </style>
    <div id="container">
        <div id="author">
            <ht-user-avatar .data=${authorData} size="42" verified-size="16"></ht-user-avatar>
            <a id="name" href="/${authorData.isOrg ? "organization" : "user"}/${
      authorData.uid
    }">${authorData.displayName}</a>
          <a id="portfolio" href="/${
            authorData.isOrg ? "organization" : "user"
          }/${authorData.uid}/portfolio">
            <paper-button raised>Портфолио</paper-button>
          </a>
        </div>
    </div>
`;
  }

  static get is() {
    return "ht-elements-item-author";
  }

  static get properties() {
    return {
      authorData: { type: Object }
    };
  }

  constructor() {
    super();
    this.authorData = {};
  }

  set data(authorData) {
    if (authorData !== undefined) this.authorData = authorData;
  }
}

customElements.define(HTElementsItemAuthor.is, HTElementsItemAuthor);
