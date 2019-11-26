import Sequelize, { Model } from 'sequelize';
import { format } from 'date-fns';
import en from 'date-fns/locale/en-US';
import pt from 'date-fns/locale/pt';

class Panel extends Model {
  static init(sequelize) {
    super.init(
      {
        data_provider: Sequelize.STRING,
        installation_date: Sequelize.DATE,
        system_syze: Sequelize.FLOAT,
        zip_code: Sequelize.INTEGER,
        state: Sequelize.STRING,
        cost: Sequelize.FLOAT,
        formatted_installation: {
          type: Sequelize.VIRTUAL,
          get() {
            return format(
              this.installation_date,
              "'Dia' dd 'de' MMM', 'yyyy'",
              { locale: en }
            );
          },
        },
        year_installation: {
          type: Sequelize.VIRTUAL,
          get() {
            return format(this.installation_date, 'yyyy', { locale: en });
          },
        },
        month_installation: {
          type: Sequelize.VIRTUAL,
          get() {
            return format(this.installation_date, 'MM', { locale: en });
          },
        },
        month_full: {
          type: Sequelize.VIRTUAL,
          get() {
            return format(this.installation_date, 'MMMM', { locale: pt });
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Panel;
