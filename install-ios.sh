#!/usr/bin/env bash

pushd node_modules/react-native/third-party/glog-0.3.4/ && ../../scripts/ios-configure-glog.sh && popd && cp ios/build/Build/Products/Debug-iphonesimulator/libfishhook.a node_modules/react-native/Libraries/WebSocket/
