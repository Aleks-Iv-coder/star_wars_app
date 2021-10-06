import React from 'react';
import DataGrid, { Column, Selection, LoadPanel } from 'devextreme-react/data-grid';
import 'whatwg-fetch';
import './styles.css';
export class Creatures extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      loadIndicatorVisible: false,
    };
    this.onContentReady = this.onContentReady.bind(this);
  };

  render(props) {
    const {onClick, creaturesList, onChangePage} = this.props;

    return (
      <>
        <DataGrid
          onRowDblClick={onClick}
          dataSource={creaturesList}
          hoverStateEnabled={true}
          allowColumnReordering={true}
          showBorders={true}
        >
          <LoadPanel enabled showIndicator />
          <Selection mode="single" />
          <Column dataField="name" dataType="string" alignment="left" />
          <Column dataField="height" dataType="string" />
          <Column dataField="mass" dataType="string" />
          <Column dataField="hair_color" dataType="string" />
          <Column dataField="skin_color" dataType="string" />
          <Column dataField="eye_color" dataType="string" />
          <Column dataField="birth_year" dataType="string" />
          <Column dataField="gender" dataType="string" />
          <Column dataField="homeworld" dataType="string" />
        </DataGrid>
        <div className={"btn-container"}>
          <button className={"btn"} name={"prev"} onClick={onChangePage}>Prev page</button>
          <button className={"btn"} name={"next"} onClick={onChangePage}>Next page</button>
        </div>
      </>
    );
  };

  onContentReady(e) {
    if (!this.state.collapsed) {
      e.component.expandRow(["EnviroCare"]);
      this.setState({
        collapsed: true,
      });
    }
  };

  onSelectionChanged() {

  }
};