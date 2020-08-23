
import { observable, action } from 'mobx';
import moment from 'moment-timezone';


export default class WorkoutStore {
    @observable exerciseList = [
        { key: 0, text: 'Selecione', value: '' },
        { key: 1, text: 'Corrida', value: 'run' },
        { key: 2, text: 'Bicicleta', value: 'bike' },
        { key: 3, text: 'Natação', value: 'swimming' },
        { key: 4, text: 'basquete', value: 'basketball' },
        { key: 5, text: 'Luta', value: 'fight' }
    ];

    @observable exerciseDate: moment.Moment | any = null;


    @action handleDate = (date: Date | null) => {
        this.exerciseDate = date

    };

}

const workout = new WorkoutStore();
export { workout };
