import React from 'react';
import DataGrid, { Column, Selection, LoadPanel} from 'devextreme-react/data-grid';
import 'whatwg-fetch';
import './styles.css';
 
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
export class Planets extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onContentReady = this.onContentReady.bind(this);
  };

  render(props) {
      const { onClick, planetsList, onChangePage } = this.props;

    return (
      <>
        <DataGrid
            onRowDblClick={onClick}
            dataSource={planetsList}
            hoverStateEnabled={true}
            allowColumnReordering={true}
            showBorders={true}
        >
            <LoadPanel enabled />
            <Selection mode="single" />
            <Column dataField="name" dataType="string" alignment="left" />
            <Column dataField="rotation_period" dataType="string" />
            <Column dataField="orbital_period" dataType="string" />
            <Column dataField="diameter" dataType="string" />
            <Column dataField="climate" dataType="string" />
            <Column dataField="gravity" dataType="string" />
            <Column dataField="terrain" dataType="string" />
            <Column dataField="surface_water" dataType="string" />
            <Column dataField="population" dataType="string" />
        </DataGrid>
        <div className={"btn-container"}>
          <button className={"btn"} name={"prev"} onClick={onChangePage}>Prev page</button>
          <button name={"next"} onClick={onChangePage}>Next page</button>
        </div>
      </>
    );
  };

  onContentReady(e) {
    if (!this.state.collapsed) {
      e.component.expandRow(["EnviroCare"]);
      this.setState({
        collapsed: true
      });
    }
  };
};