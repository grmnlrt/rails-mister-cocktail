class PhotoUploader < CarrierWave::Uploader::Base
  include Cloudinary::CarrierWave
end
