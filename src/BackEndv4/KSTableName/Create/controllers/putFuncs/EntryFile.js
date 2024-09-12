import {
  PutFunc as PutFuncRepo, PutToValueFunc as PutToValueRepo,
  PutFromBodyFunc as PutFromBodyFuncRepo,
  PutToValueInArrayFunc as PutToValueInArrayRepo
} from "../../repos/putFuncs/EntryFile.js";

let PutFunc = async (req, res) => {
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;

  let LocalFromRepo = await PutFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

let PutToValueFunc = async (req, res) => {
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;
  let LocalKeyName = req.params.KeyName;

  let LocalFromRepo = await PutToValueRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
    inKeyName: LocalKeyName
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

let PutToValueInArrayFunc = async (req, res) => {
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;
  let LocalKeyName = req.params.KeyName;

  let LocalFromRepo = await PutToValueInArrayRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
    inKeyName: LocalKeyName
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

let PutFromBodyFunc = async (req, res) => {
  let LocalDataToUpdate = req.body;

  let LocalIfFromParam = req.params.id;

  let LocalFromRepo = await PutFromBodyFuncRepo({
    inDataToUpdate: LocalDataToUpdate,
    inId: LocalIfFromParam,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

export { PutFunc, PutToValueFunc, PutFromBodyFunc, PutToValueInArrayFunc };
