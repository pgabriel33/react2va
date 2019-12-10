import React from "react";
import { connect } from "react-redux";


function EquipmentListItem({equipment}) {
    return(
        <tr>
            <td>{equipment.id}</td>
            <td>{equipment.name}</td>
            <td>{equipment.description}</td>
            <td>{equipment.price}</td>
            <td></td>
        </tr>
    );
}

export default connect(null, {})(EquipmentListItem);
// connect (mapStateToProps, mapDispatchToProps)
// state - parâmetros
// dispatch - ações
