import Art from '../models/Art.model';

export class ArtController {
  public get = async (id: number): Promise<Art> => {
    try {
      let art = await Art.findOne({
        where: { id: id },
      });
      if (art) return art;
      else
        throw {
          message: 'couldnt find the art',
        };
    } catch (error) {
      throw {
        message: 'couldnt find the art',
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
      return 'Art Deleted'
    } catch (error) {
      throw {
        message: 'couldnt delete the art',
      };
    }
  };
}
