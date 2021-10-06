import React from 'react';
import Form, { SimpleItem, GroupItem } from 'devextreme-react/form';
import 'devextreme-react/text-area';
import './styles.css';

export class CreatureCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { customeData } = this.props;
    return (
      <>
        <div className="long-title">
            <h3> {customeData.name} </h3>
        </div>
        <Form formData={customeData}>
          <GroupItem className="first-group">
            <GroupItem colSpan={3}>
              <SimpleItem dataField="name" />
              <SimpleItem dataField="gender" />
              <SimpleItem dataField="birth_year"/>
            </GroupItem>
          </GroupItem>
          <GroupItem className="second-group" colCount={2}>
            <GroupItem>
              <SimpleItem dataField="mass" />
              <SimpleItem dataField="hair_color" />
              <SimpleItem dataField="skin_color"/>
              <SimpleItem dataField="eye_color"/>
            </GroupItem>
            <GroupItem>
              <SimpleItem dataField="homeworld"/>
              <SimpleItem dataField="vehicles" />
              <SimpleItem dataField="starships" />
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
