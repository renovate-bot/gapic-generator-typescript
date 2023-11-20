load("@bazel_tools//tools/build_defs/repo:utils.bzl", "maybe")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

def gapic_generator_typescript_repositories():
  maybe(
    http_archive,
    name = "aspect_rules_js",
    sha256 = "1741168b9f09fc30bb18e57f43ac504c2f60f703146b706a18937af68bf8355f",
    strip_prefix = "rules_js-1.33.0",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.33.0.tar.gz",
  )

  maybe(
    http_archive,
    name = "aspect_rules_ts",
    sha256 = "4c3f34fff9f96ffc9c26635d8235a32a23a6797324486c7d23c1dfa477e8b451",
    strip_prefix = "rules_ts-1.4.5",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v1.4.5.tar.gz",
  )

  maybe(
      http_archive,
      name = "rules_proto",
      sha256 = "5bc1a7136fc2d37f5162cb61dfc6e168983c7fcded2f9e15e4540daf833f1a1c",
      strip_prefix = "rules_proto-b1e0e9ae6d6e8719abe70a076d410f4c0797dcf3",
      urls = [
          "https://mirror.bazel.build/github.com/bazelbuild/rules_proto/archive/b1e0e9ae6d6e8719abe70a076d410f4c0797dcf3.tar.gz",
          "https://github.com/bazelbuild/rules_proto/archive/b1e0e9ae6d6e8719abe70a076d410f4c0797dcf3.tar.gz",
      ],
  )

  _rules_gapic_version = "0.9.0"
  maybe(
      http_archive,
      name = "rules_gapic",
      strip_prefix = "rules_gapic-%s" % _rules_gapic_version,
      urls = ["https://github.com/googleapis/rules_gapic/archive/v%s.tar.gz" % _rules_gapic_version],
  )

  maybe(
      http_archive,
      name = "com_google_protobuf",
      sha256 = "bfa5597c5cc279012cae6a6c1727090427f2f9a37741cfd8eed2802b628f9426",
      strip_prefix = "protobuf-24.4",
      urls = ["https://github.com/protocolbuffers/protobuf/archive/v24.4.tar.gz"],
  )

# This is the version of Node.js that would run the generator, it's unrelated to the versions supported by the generated libraries
NODE_VERSION = "18.12.1" # https://github.com/bazelbuild/rules_nodejs/blob/stable/nodejs/private/node_versions.bzl
