import CardapioModel from './CardapioModel'

export default class MenuModel extends CardapioModel {
    constructor(params) {
        this.entrance = params.entrance;
        this.plate1 = params.plate1;
        this.dessert = params.dessert;
        this.option = params.option;
        this.plate2 = params.plate2;
        this.grill = params.grill;
        this.gourmet = params.gourmet;
        this.dessert2 = params.dessert2;
        this.dessert3 = params.dessert3;
    }
}
