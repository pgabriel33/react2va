import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import EquipmentList from "./EquipmentList";
import EquipmentForm from "./EquipmentForm";

function EquipmentManager() {
    return (
        <section>
            <h2 className="page-header">Equipment Management</h2>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/equipment" component={EquipmentList} />
                    <Route exact path="/equipment/new" component={EquipmentForm} />
                </Switch>
            </BrowserRouter>

        </section>
    );
}

export default EquipmentManager;
