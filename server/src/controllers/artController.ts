import { FilterParams } from '../configs/types';
import Art from '../models/Art.model';

export class ArtController {
  public get = async (
    filter: FilterParams = { page: 1, perPage: 12 }
  ): Promise<Art[]> => {
    try {
      let art = await Art.findAll({
        limit: filter.perPage,
        offset: filter.page - 1,
      });
      return art;
    } catch (error) {
      throw {
        message: 'error listing arts',
      };
    }
  };

  public create = async (art: Art): Promise<string> => {
    try {
      await Art.create(art);
      return 'Created Art';
    } catch (error) {
      throw {
        message: 'coudnt create the art',
      };
    }
  };

  public edit = async (art: Art): Promise<string> => {
    try {
      await Art.update(
        {
          ...art,
        },
        {
          where: {
            id: art.id,
          },
        }
      );
      return 'edit Art';
    } catch (error) {
      throw {
        message: 'coudnt edit the art',
      };
    }
  };

  public delete = async (id: number): Promise<string> => {
    try {
      await Art.destroy({
        where: { id: id },
      });
      return 'Art Deleted';
    } catch (error) {
      throw {
        message: 'couldnt delete the art',
      };
    }
  };
}
