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
var SectionContent = module.exports.SectionContent = function(args) {
  this.markdown = null;
  this.htmlRelativePath = null;
  if (args) {
    if (args.markdown !== undefined && args.markdown !== null) {
      this.markdown = args.markdown;
    }
    if (args.htmlRelativePath !== undefined && args.htmlRelativePath !== null) {
      this.htmlRelativePath = args.htmlRelativePath;
    }
  }
};
SectionContent.prototype = {};
SectionContent.prototype.read = function(input) {
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
        this.markdown = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.htmlRelativePath = input.readString();
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

SectionContent.prototype.write = function(output) {
  output.writeStructBegin('SectionContent');
  if (this.markdown !== null && this.markdown !== undefined) {
    output.writeFieldBegin('markdown', Thrift.Type.STRING, 1);
    output.writeString(this.markdown);
    output.writeFieldEnd();
  }
  if (this.htmlRelativePath !== null && this.htmlRelativePath !== undefined) {
    output.writeFieldBegin('htmlRelativePath', Thrift.Type.STRING, 2);
    output.writeString(this.htmlRelativePath);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Media = module.exports.Media = function(args) {
  this.url = null;
  this.playbackMetadataJson = null;
  if (args) {
    if (args.url !== undefined && args.url !== null) {
      this.url = args.url;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field url is unset!');
    }
    if (args.playbackMetadataJson !== undefined && args.playbackMetadataJson !== null) {
      this.playbackMetadataJson = args.playbackMetadataJson;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field playbackMetadataJson is unset!');
    }
  }
};
Media.prototype = {};
Media.prototype.read = function(input) {
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
        this.url = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.playbackMetadataJson = input.readString();
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

Media.prototype.write = function(output) {
  output.writeStructBegin('Media');
  if (this.url !== null && this.url !== undefined) {
    output.writeFieldBegin('url', Thrift.Type.STRING, 1);
    output.writeString(this.url);
    output.writeFieldEnd();
  }
  if (this.playbackMetadataJson !== null && this.playbackMetadataJson !== undefined) {
    output.writeFieldBegin('playbackMetadataJson', Thrift.Type.STRING, 2);
    output.writeString(this.playbackMetadataJson);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Section = module.exports.Section = function(args) {
  this.id = null;
  this.playbackMetadataJson = null;
  this.content = null;
  this.media = null;
  this.assessmentIds = null;
  this.contentWebp = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.playbackMetadataJson !== undefined && args.playbackMetadataJson !== null) {
      this.playbackMetadataJson = args.playbackMetadataJson;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field playbackMetadataJson is unset!');
    }
    if (args.content !== undefined && args.content !== null) {
      this.content = new ttypes.SectionContent(args.content);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field content is unset!');
    }
    if (args.media !== undefined && args.media !== null) {
      this.media = new ttypes.Media(args.media);
    }
    if (args.assessmentIds !== undefined && args.assessmentIds !== null) {
      this.assessmentIds = Thrift.copyList(args.assessmentIds, [null]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field assessmentIds is unset!');
    }
    if (args.contentWebp !== undefined && args.contentWebp !== null) {
      this.contentWebp = new ttypes.SectionContent(args.contentWebp);
    }
  }
};
Section.prototype = {};
Section.prototype.read = function(input) {
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
        this.playbackMetadataJson = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.content = new ttypes.SectionContent();
        this.content.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.media = new ttypes.Media();
        this.media.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.assessmentIds = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.assessmentIds.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.contentWebp = new ttypes.SectionContent();
        this.contentWebp.read(input);
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

Section.prototype.write = function(output) {
  output.writeStructBegin('Section');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.playbackMetadataJson !== null && this.playbackMetadataJson !== undefined) {
    output.writeFieldBegin('playbackMetadataJson', Thrift.Type.STRING, 2);
    output.writeString(this.playbackMetadataJson);
    output.writeFieldEnd();
  }
  if (this.content !== null && this.content !== undefined) {
    output.writeFieldBegin('content', Thrift.Type.STRUCT, 3);
    this.content.write(output);
    output.writeFieldEnd();
  }
  if (this.media !== null && this.media !== undefined) {
    output.writeFieldBegin('media', Thrift.Type.STRUCT, 4);
    this.media.write(output);
    output.writeFieldEnd();
  }
  if (this.assessmentIds !== null && this.assessmentIds !== undefined) {
    output.writeFieldBegin('assessmentIds', Thrift.Type.SET, 5);
    output.writeSetBegin(Thrift.Type.STRING, this.assessmentIds.length);
    for (var iter7 in this.assessmentIds)
    {
      if (this.assessmentIds.hasOwnProperty(iter7))
      {
        iter7 = this.assessmentIds[iter7];
        output.writeString(iter7);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.contentWebp !== null && this.contentWebp !== undefined) {
    output.writeFieldBegin('contentWebp', Thrift.Type.STRUCT, 6);
    this.contentWebp.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

