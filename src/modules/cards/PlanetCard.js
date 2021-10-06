import React from 'react';
import Form, { SimpleItem, GroupItem } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import './styles.css';

export class PlanetCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { customeData } = this.props;
    return (
        <>
        <div className="long-title">
            <h3>{customeData.name} Planet</h3>
        </div>
        <Form formData={customeData}>
        <GroupItem className="first-group">
            <GroupItem colSpan={4}>
            <SimpleItem dataField="name"/>
            <SimpleItem dataField="rotation_period" />
            <SimpleItem dataField="orbital_period"/>
            <SimpleItem dataField="diameter" />
            </GroupItem>
        </GroupItem>
        <GroupItem className="second-group" colCount={2}>
            <GroupItem>
                <SimpleItem dataField="climate" />
                <SimpleItem dataField="gravity" />
                <SimpleItem dataField="terrain"/>
            </GroupItem>
            <GroupItem>
                <SimpleItem dataField="surface_water"/>
                <SimpleItem dataField="population"/>
                <SimpleItem dataField="residents"/>
            </GroupItem>
        </GroupItem>
        <GroupItem className="second-group" >
            <SimpleItem dataField="films"/>
            <SimpleItem dataField="created" />
            <SimpleItem dataField="edited" />
        </GroupItem>
        </Form>
      </>
    );
  }
};
