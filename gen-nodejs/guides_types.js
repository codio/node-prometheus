//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
SectionContent = module.exports.SectionContent = function(args) {
  this.markdown = null;
  this.htmlRelativePath = null;
  if (args) {
    if (args.markdown !== undefined) {
      this.markdown = args.markdown;
    }
    if (args.htmlRelativePath !== undefined) {
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

Media = module.exports.Media = function(args) {
  this.url = null;
  this.playbackMetadataJson = null;
  if (args) {
    if (args.url !== undefined) {
      this.url = args.url;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field url is unset!');
    }
    if (args.playbackMetadataJson !== undefined) {
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

Section = module.exports.Section = function(args) {
  this.id = null;
  this.playbackMetadataJson = null;
  this.content = null;
  this.media = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
    if (args.playbackMetadataJson !== undefined) {
      this.playbackMetadataJson = args.playbackMetadataJson;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field playbackMetadataJson is unset!');
    }
    if (args.content !== undefined) {
      this.content = args.content;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field content is unset!');
    }
    if (args.media !== undefined) {
      this.media = args.media;
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
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
