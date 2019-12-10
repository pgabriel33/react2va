import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { equipmentSelector } from "../../store/selectors/equipmentSelector";
import EquipmentListItem from './EquipmentListItem';
import { saveEquipment } from '../../store/actions/equipmentActions';

export class EquipmentForm extends PureComponent {

    render() {
        return (
            <div>
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/equipment" className="btn btn-danger">Cancel</Link>

            </div>
        );
    }

}

export default connect(equipmentSelector, { saveEquipment })(EquipmentForm);
