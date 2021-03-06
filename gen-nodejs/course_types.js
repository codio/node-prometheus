//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var CourseDetails = module.exports.CourseDetails = function(args) {
  this.name = null;
  this.description = null;
  this.longDescription = null;
  this.imageUrl = null;
  this.tags = [];
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field name is unset!');
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.longDescription !== undefined && args.longDescription !== null) {
      this.longDescription = args.longDescription;
    }
    if (args.imageUrl !== undefined && args.imageUrl !== null) {
      this.imageUrl = args.imageUrl;
    }
    if (args.tags !== undefined && args.tags !== null) {
      this.tags = Thrift.copyList(args.tags, [null]);
    }
  }
};
CourseDetails.prototype = {};
CourseDetails.prototype.read = function(input) {
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
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.longDescription = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.imageUrl = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.tags = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.tags.push(elem6);
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

CourseDetails.prototype.write = function(output) {
  output.writeStructBegin('CourseDetails');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 2);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.longDescription !== null && this.longDescription !== undefined) {
    output.writeFieldBegin('longDescription', Thrift.Type.STRING, 3);
    output.writeString(this.longDescription);
    output.writeFieldEnd();
  }
  if (this.imageUrl !== null && this.imageUrl !== undefined) {
    output.writeFieldBegin('imageUrl', Thrift.Type.STRING, 4);
    output.writeString(this.imageUrl);
    output.writeFieldEnd();
  }
  if (this.tags !== null && this.tags !== undefined) {
    output.writeFieldBegin('tags', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRING, this.tags.length);
    for (var iter7 in this.tags)
    {
      if (this.tags.hasOwnProperty(iter7))
      {
        iter7 = this.tags[iter7];
        output.writeString(iter7);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Course = module.exports.Course = function(args) {
  this.id = null;
  this.details = null;
  this.moduleIds = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.details !== undefined && args.details !== null) {
      this.details = new ttypes.CourseDetails(args.details);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field details is unset!');
    }
    if (args.moduleIds !== undefined && args.moduleIds !== null) {
      this.moduleIds = Thrift.copyList(args.moduleIds, [null]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field moduleIds is unset!');
    }
  }
};
Course.prototype = {};
Course.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.details = new ttypes.CourseDetails();
        this.details.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.moduleIds = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.moduleIds.push(elem14);
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

Course.prototype.write = function(output) {
  output.writeStructBegin('Course');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.details !== null && this.details !== undefined) {
    output.writeFieldBegin('details', Thrift.Type.STRUCT, 2);
    this.details.write(output);
    output.writeFieldEnd();
  }
  if (this.moduleIds !== null && this.moduleIds !== undefined) {
    output.writeFieldBegin('moduleIds', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.moduleIds.length);
    for (var iter15 in this.moduleIds)
    {
      if (this.moduleIds.hasOwnProperty(iter15))
      {
        iter15 = this.moduleIds[iter15];
        output.writeString(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

