class ActiveAdmin::Asset < ActiveRecord::Base
  attr_accessible :storage
  mount_uploader :storage, AssetUploader
end
