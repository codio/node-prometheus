//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var common_ttypes = require('./common_types')


var ttypes = module.exports = {};
MultipleChoiceAttempt = module.exports.MultipleChoiceAttempt = function(args) {
  this.points = null;
  this.expectedAnswerIds = null;
  this.answerIds = null;
  if (args) {
    if (args.points !== undefined) {
      this.points = args.points;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field points is unset!');
    }
    if (args.expectedAnswerIds !== undefined) {
      this.expectedAnswerIds = args.expectedAnswerIds;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field expectedAnswerIds is unset!');
    }
    if (args.answerIds !== undefined) {
      this.answerIds = args.answerIds;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field answerIds is unset!');
    }
  }
};
MultipleChoiceAttempt.prototype = {};
MultipleChoiceAttempt.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.points = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.expectedAnswerIds = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.expectedAnswerIds.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.SET) {
        var _size7 = 0;
        var _rtmp311;
        this.answerIds = [];
        var _etype10 = 0;
        _rtmp311 = input.readSetBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = input.readString();
          this.answerIds.push(elem13);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MultipleChoiceAttempt.prototype.write = function(output) {
  output.writeStructBegin('MultipleChoiceAttempt');
  if (this.points !== null && this.points !== undefined) {
    output.writeFieldBegin('points', Thrift.Type.I32, 1);
    output.writeI32(this.points);
    output.writeFieldEnd();
  }
  if (this.expectedAnswerIds !== null && this.expectedAnswerIds !== undefined) {
    output.writeFieldBegin('expectedAnswerIds', Thrift.Type.SET, 2);
    output.writeSetBegin(Thrift.Type.STRING, this.expectedAnswerIds.length);
    for (var iter14 in this.expectedAnswerIds)
    {
      if (this.expectedAnswerIds.hasOwnProperty(iter14))
      {
        iter14 = this.expectedAnswerIds[iter14];
        output.writeString(iter14);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.answerIds !== null && this.answerIds !== undefined) {
    output.writeFieldBegin('answerIds', Thrift.Type.SET, 3);
    output.writeSetBegin(Thrift.Type.STRING, this.answerIds.length);
    for (var iter15 in this.answerIds)
    {
      if (this.answerIds.hasOwnProperty(iter15))
      {
        iter15 = this.answerIds[iter15];
        output.writeString(iter15);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FillInBlanksAttempt = module.exports.FillInBlanksAttempt = function(args) {
  this.points = null;
  this.expectedAnswers = null;
  this.answers = null;
  if (args) {
    if (args.points !== undefined) {
      this.points = args.points;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field points is unset!');
    }
    if (args.expectedAnswers !== undefined) {
      this.expectedAnswers = args.expectedAnswers;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field expectedAnswers is unset!');
    }
    if (args.answers !== undefined) {
      this.answers = args.answers;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field answers is unset!');
    }
  }
};
FillInBlanksAttempt.prototype = {};
FillInBlanksAttempt.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.points = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.expectedAnswers = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = input.readString();
          this.expectedAnswers.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size23 = 0;
        var _rtmp327;
        this.answers = [];
        var _etype26 = 0;
        _rtmp327 = input.readListBegin();
        _etype26 = _rtmp327.etype;
        _size23 = _rtmp327.size;
        for (var _i28 = 0; _i28 < _size23; ++_i28)
        {
          var elem29 = null;
          elem29 = input.readString();
          this.answers.push(elem29);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FillInBlanksAttempt.prototype.write = function(output) {
  output.writeStructBegin('FillInBlanksAttempt');
  if (this.points !== null && this.points !== undefined) {
    output.writeFieldBegin('points', Thrift.Type.I32, 1);
    output.writeI32(this.points);
    output.writeFieldEnd();
  }
  if (this.expectedAnswers !== null && this.expectedAnswers !== undefined) {
    output.writeFieldBegin('expectedAnswers', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.expectedAnswers.length);
    for (var iter30 in this.expectedAnswers)
    {
      if (this.expectedAnswers.hasOwnProperty(iter30))
      {
        iter30 = this.expectedAnswers[iter30];
        output.writeString(iter30);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.answers !== null && this.answers !== undefined) {
    output.writeFieldBegin('answers', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.answers.length);
    for (var iter31 in this.answers)
    {
      if (this.answers.hasOwnProperty(iter31))
      {
        iter31 = this.answers[iter31];
        output.writeString(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ServerSideTestAttempt = module.exports.ServerSideTestAttempt = function(args) {
  this.points = null;
  this.returnCode = null;
  this.stdout = null;
  this.stderr = null;
  if (args) {
    if (args.points !== undefined) {
      this.points = args.points;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field points is unset!');
    }
    if (args.returnCode !== undefined) {
      this.returnCode = args.returnCode;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field returnCode is unset!');
    }
    if (args.stdout !== undefined) {
      this.stdout = args.stdout;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field stdout is unset!');
    }
    if (args.stderr !== undefined) {
      this.stderr = args.stderr;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field stderr is unset!');
    }
  }
};
ServerSideTestAttempt.prototype = {};
ServerSideTestAttempt.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.points = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.returnCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.stdout = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.stderr = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ServerSideTestAttempt.prototype.write = function(output) {
  output.writeStructBegin('ServerSideTestAttempt');
  if (this.points !== null && this.points !== undefined) {
    output.writeFieldBegin('points', Thrift.Type.I32, 1);
    output.writeI32(this.points);
    output.writeFieldEnd();
  }
  if (this.returnCode !== null && this.returnCode !== undefined) {
    output.writeFieldBegin('returnCode', Thrift.Type.I32, 2);
    output.writeI32(this.returnCode);
    output.writeFieldEnd();
  }
  if (this.stdout !== null && this.stdout !== undefined) {
    output.writeFieldBegin('stdout', Thrift.Type.STRING, 3);
    output.writeString(this.stdout);
    output.writeFieldEnd();
  }
  if (this.stderr !== null && this.stderr !== undefined) {
    output.writeFieldBegin('stderr', Thrift.Type.STRING, 4);
    output.writeString(this.stderr);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FreeTextDone = module.exports.FreeTextDone = function(args) {
  this.points = null;
  if (args) {
    if (args.points !== undefined) {
      this.points = args.points;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field points is unset!');
    }
  }
};
FreeTextDone.prototype = {};
FreeTextDone.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.points = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FreeTextDone.prototype.write = function(output) {
  output.writeStructBegin('FreeTextDone');
  if (this.points !== null && this.points !== undefined) {
    output.writeFieldBegin('points', Thrift.Type.I32, 1);
    output.writeI32(this.points);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FreeTextStatus = module.exports.FreeTextStatus = function(args) {
  this.pending = null;
  this.done = null;
  if (args) {
    if (args.pending !== undefined) {
      this.pending = args.pending;
    }
    if (args.done !== undefined) {
      this.done = args.done;
    }
  }
};
FreeTextStatus.prototype = {};
FreeTextStatus.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.pending = new common_ttypes.Empty();
        this.pending.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.done = new ttypes.FreeTextDone();
        this.done.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FreeTextStatus.prototype.write = function(output) {
  output.writeStructBegin('FreeTextStatus');
  if (this.pending !== null && this.pending !== undefined) {
    output.writeFieldBegin('pending', Thrift.Type.STRUCT, 1);
    this.pending.write(output);
    output.writeFieldEnd();
  }
  if (this.done !== null && this.done !== undefined) {
    output.writeFieldBegin('done', Thrift.Type.STRUCT, 2);
    this.done.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FreeTextAttempt = module.exports.FreeTextAttempt = function(args) {
  this.id = null;
  this.answer = null;
  this.status = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.answer !== undefined) {
      this.answer = args.answer;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field answer is unset!');
    }
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
  }
};
FreeTextAttempt.prototype = {};
FreeTextAttempt.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.answer = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.status = new ttypes.FreeTextStatus();
        this.status.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

FreeTextAttempt.prototype.write = function(output) {
  output.writeStructBegin('FreeTextAttempt');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.answer !== null && this.answer !== undefined) {
    output.writeFieldBegin('answer', Thrift.Type.STRING, 2);
    output.writeString(this.answer);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 3);
    this.status.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CustomTaskAttempt = module.exports.CustomTaskAttempt = function(args) {
  this.points = null;
  if (args) {
    if (args.points !== undefined) {
      this.points = args.points;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field points is unset!');
    }
  }
};
CustomTaskAttempt.prototype = {};
CustomTaskAttempt.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.points = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CustomTaskAttempt.prototype.write = function(output) {
  output.writeStructBegin('CustomTaskAttempt');
  if (this.points !== null && this.points !== undefined) {
    output.writeFieldBegin('points', Thrift.Type.I32, 1);
    output.writeI32(this.points);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CheckResult = module.exports.CheckResult = function(args) {
  this.multipleChoice = null;
  this.fillInBlanks = null;
  this.codeTest = null;
  this.codeOutputCompare = null;
  this.custom = null;
  this.freeText = null;
  if (args) {
    if (args.multipleChoice !== undefined) {
      this.multipleChoice = args.multipleChoice;
    }
    if (args.fillInBlanks !== undefined) {
      this.fillInBlanks = args.fillInBlanks;
    }
    if (args.codeTest !== undefined) {
      this.codeTest = args.codeTest;
    }
    if (args.codeOutputCompare !== undefined) {
      this.codeOutputCompare = args.codeOutputCompare;
    }
    if (args.custom !== undefined) {
      this.custom = args.custom;
    }
    if (args.freeText !== undefined) {
      this.freeText = args.freeText;
    }
  }
};
CheckResult.prototype = {};
CheckResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.multipleChoice = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = new ttypes.MultipleChoiceAttempt();
          elem38.read(input);
          this.multipleChoice.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size39 = 0;
        var _rtmp343;
        this.fillInBlanks = [];
        var _etype42 = 0;
        _rtmp343 = input.readListBegin();
        _etype42 = _rtmp343.etype;
        _size39 = _rtmp343.size;
        for (var _i44 = 0; _i44 < _size39; ++_i44)
        {
          var elem45 = null;
          elem45 = new ttypes.FillInBlanksAttempt();
          elem45.read(input);
          this.fillInBlanks.push(elem45);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size46 = 0;
        var _rtmp350;
        this.codeTest = [];
        var _etype49 = 0;
        _rtmp350 = input.readListBegin();
        _etype49 = _rtmp350.etype;
        _size46 = _rtmp350.size;
        for (var _i51 = 0; _i51 < _size46; ++_i51)
        {
          var elem52 = null;
          elem52 = new ttypes.ServerSideTestAttempt();
          elem52.read(input);
          this.codeTest.push(elem52);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size53 = 0;
        var _rtmp357;
        this.codeOutputCompare = [];
        var _etype56 = 0;
        _rtmp357 = input.readListBegin();
        _etype56 = _rtmp357.etype;
        _size53 = _rtmp357.size;
        for (var _i58 = 0; _i58 < _size53; ++_i58)
        {
          var elem59 = null;
          elem59 = new ttypes.ServerSideTestAttempt();
          elem59.read(input);
          this.codeOutputCompare.push(elem59);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size60 = 0;
        var _rtmp364;
        this.custom = [];
        var _etype63 = 0;
        _rtmp364 = input.readListBegin();
        _etype63 = _rtmp364.etype;
        _size60 = _rtmp364.size;
        for (var _i65 = 0; _i65 < _size60; ++_i65)
        {
          var elem66 = null;
          elem66 = new ttypes.CustomTaskAttempt();
          elem66.read(input);
          this.custom.push(elem66);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size67 = 0;
        var _rtmp371;
        this.freeText = [];
        var _etype70 = 0;
        _rtmp371 = input.readListBegin();
        _etype70 = _rtmp371.etype;
        _size67 = _rtmp371.size;
        for (var _i72 = 0; _i72 < _size67; ++_i72)
        {
          var elem73 = null;
          elem73 = new ttypes.FreeTextAttempt();
          elem73.read(input);
          this.freeText.push(elem73);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CheckResult.prototype.write = function(output) {
  output.writeStructBegin('CheckResult');
  if (this.multipleChoice !== null && this.multipleChoice !== undefined) {
    output.writeFieldBegin('multipleChoice', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.multipleChoice.length);
    for (var iter74 in this.multipleChoice)
    {
      if (this.multipleChoice.hasOwnProperty(iter74))
      {
        iter74 = this.multipleChoice[iter74];
        iter74.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.fillInBlanks !== null && this.fillInBlanks !== undefined) {
    output.writeFieldBegin('fillInBlanks', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.fillInBlanks.length);
    for (var iter75 in this.fillInBlanks)
    {
      if (this.fillInBlanks.hasOwnProperty(iter75))
      {
        iter75 = this.fillInBlanks[iter75];
        iter75.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.codeTest !== null && this.codeTest !== undefined) {
    output.writeFieldBegin('codeTest', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.codeTest.length);
    for (var iter76 in this.codeTest)
    {
      if (this.codeTest.hasOwnProperty(iter76))
      {
        iter76 = this.codeTest[iter76];
        iter76.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.codeOutputCompare !== null && this.codeOutputCompare !== undefined) {
    output.writeFieldBegin('codeOutputCompare', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.codeOutputCompare.length);
    for (var iter77 in this.codeOutputCompare)
    {
      if (this.codeOutputCompare.hasOwnProperty(iter77))
      {
        iter77 = this.codeOutputCompare[iter77];
        iter77.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.custom !== null && this.custom !== undefined) {
    output.writeFieldBegin('custom', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.custom.length);
    for (var iter78 in this.custom)
    {
      if (this.custom.hasOwnProperty(iter78))
      {
        iter78 = this.custom[iter78];
        iter78.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.freeText !== null && this.freeText !== undefined) {
    output.writeFieldBegin('freeText', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.freeText.length);
    for (var iter79 in this.freeText)
    {
      if (this.freeText.hasOwnProperty(iter79))
      {
        iter79 = this.freeText[iter79];
        iter79.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
