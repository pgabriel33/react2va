import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { equipmentListSelector } from "../../store/selectors/equipmentSelector";
import EquipmentListItem from './EquipmentListItem';
import { listEquipment } from '../../store/actions/equipmentActions';


export class EquipmentList extends PureComponent {

    componentDidMount() {


        console.log(this.props);
        console.log(this.store);

        console.log('PRODUTOS = ')
        this.props.listEquipment();
        console.log(this.props.equipments);
    }

    render() {
        return (
            <div>
                <Link className="btn btn-primary" to="/equipment/new">
                    Add
                </Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(this.props.equipments || []).map((e) => <EquipmentListItem key={e.id} equipment={e} />)}
                    </tbody>
                </table>
            </div>
        );
    }


}


export default connect(equipmentListSelector, { listEquipment })(EquipmentList);
// connect (mapStateToProps, mapDispatchToProps)
// state - parâmetros
// dispatch - ações
