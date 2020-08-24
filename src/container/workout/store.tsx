
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

    @observable countExercise = 0;


    @action handleDate = (date: Date | null) => {
        this.exerciseDate = date
    };

    @action handleForm = async (event: any, subevent?: any) => {
        const { id, value } = subevent || event.target;
        this[id] = value;
    };

    @action handleExerciseList = (_e: any, sub: any) => {
        this.exercise = sub.value;
    };

    @action AddWorkout = async () => {
        const { time, exercise, exerciseDate } = this
        this.countExercise = this.countExercise + 1
        this.exerciseListTable.push({ id: this.countExercise, time: time, exercise: exercise, exerciseDate: exerciseDate })
        this.updateWorkout({ id: this.countExercise, time, exercise, exerciseDate }, 'add')
    }

    @action removeWorkout = async (item: any) => {
        const rmWorkout = this.exerciseListTable.splice(this.exerciseListTable.findIndex(a => a.id === item), 1)
        this.updateWorkout(rmWorkout, 'remove')
    }

    @action filterWorkout = async () => {
        const { exercise, time } = this
        if (exercise || time) {
            this.exerciseListTable = this.exerciseListTable.filter((t) => {
                if (t.exercise === exercise) {
                    return t
                }
                if (t.time === time) {
                    return t
                }

            })
        }
        else this.updateWorkout()


    }


    @action updateWorkout = async (workout?: any, type?: string) => {
        if (type === 'add') {
            return this.exerciseListTableCopy.push(workout);
        }
        if (type === 'remove') {
            return this.exerciseListTableCopy.splice(this.exerciseListTableCopy.findIndex(a => a.id === workout.id), 1)
        }
        this.exerciseListTable = [];
        this.exerciseListTable = this.exerciseListTableCopy
    }
}

const workout = new WorkoutStore();
export { workout };
