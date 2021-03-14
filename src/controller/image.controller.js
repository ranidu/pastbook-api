import { Image } from "../models/modelHolder"; 

export default class ImageController {  
  static async create(req, res, next) {
    let list = await Image.findOne();
    if (list) {
      try {
        await Image.update({ images: req.body }, { where: {id: list.id}});
        res.send(req.body);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await Image.create({ images: req.body });
        res.send(req.body);
      } catch (e) {
        console.log(e);
      }
    }
  }

  static async getImages(req, res, next) {
    let list = await Image.findOne();
    res.send(list);
  }
}
