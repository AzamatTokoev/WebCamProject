import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Все",
        },
        {
          key: "Gachimuchi",
          name: "Гачимучи",
        },
        {
          key: "Red Hair",
          name: "Рыжие",
        },
        {
          key: "Kyrgyz",
          name: "KG",
        },
        {
          key: "Blonde",
          name: "Блонда",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}
export default Categories;
