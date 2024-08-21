import {
  GetFunc as GetFuncRepo
} from "../../repos/GetFuncs/EntryFile.js";

let GetFunc = async (req, res) => {

  let LocalIfFromParam = req.params;
  let Localid = LocalIfFromParam.id;
  let LocalKey = LocalIfFromParam.inKey;
  let LocalValue = LocalIfFromParam.inValue;

  let LocalFromRepo = await GetFuncRepo({
    inId: Localid,
    inKey: LocalKey,
    inValue: LocalValue,
  });

  if (LocalFromRepo.KTF === false) {
    res.status(500).send(LocalFromRepo.KReason);
    return;
  };

  res.json(LocalFromRepo);
};

export { GetFunc };
