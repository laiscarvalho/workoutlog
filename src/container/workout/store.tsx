
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

    @observable time = 0;
    @observable exercise = ''

    @observable exerciseDate: moment.Moment | any = null;
    @observable exerciseListTable: any[] = [];

    @observable exerciseListTableCopy: any[] = [];


    @action handleDate = (date: Date | null) => {
        this.exerciseDate = date
    };

    @action handleForm = async (event: any, subevent?: any) => {
        const { id, value } = subevent || event.target;
        console.log(id, value)
        this[id] = value;
    };

    @action handleExerciseList = (_e: any, sub: any) => {
        this.exercise = sub.value;
    };

    @action AddWorkout = async () => {
        const { time, exercise, exerciseDate } = this
        const t = this.exerciseListTable.length
        this.exerciseListTable.push({ id: t, time: time, exercise: exercise, exerciseDate: exerciseDate })
        this.exerciseListTableCopy = this.exerciseListTable
    }

    @action removeWorkout = async (index: any) => {
        this.exerciseListTable.indexOf(index);
        if (index > -1) {
            this.exerciseListTable.splice(index, 1);
        }
    }

    @action filterWorkout = async () => {
        const { exercise, time, exerciseDate } = this
        
        this.exerciseListTable.filter((t) => {
            if (t.exercise === exercise) {
                return t
            } else
                if (t.time === time) {
                    return t
                } else
                    if (t.exerciseDate === exercise) {
                        return t
                    } else
                        if (t.exerciseDate === exerciseDate && t.time === time && t.exercise) {
                            return t
                        }
            return
        })
    }




}

const workout = new WorkoutStore();
export { workout };
