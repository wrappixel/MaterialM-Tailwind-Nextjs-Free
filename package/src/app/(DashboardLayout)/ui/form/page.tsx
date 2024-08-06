import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <h5 className="card-title">Form</h5>
        <div className="mt-6">
          <div className="grid grid-cols-12 gap-30">
            <div className="lg:col-span-6 col-span-12">
              <div className="flex  flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your Name" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="name@materialm.com"
                    required
                    className="form-control"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                  </div>
                  <TextInput
                    id="password1"
                    type="password"
                    required
                    className="form-control"
                  />
                </div>
              
              </div>
            </div>
            <div className="lg:col-span-6 col-span-12">
              <div className="flex  flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Country" />
                  </div>
                  <Select id="countries" required className="select-rounded">
                    <option>India</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="State" />
                  </div>
                  <Select id="countries" required className="select-rounded">
                    <option>Delhi</option>
                    <option>Gujarat</option>
                    <option>Mumbai</option>
                    <option>Chennai</option>
                  </Select>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="City" />
                  </div>
                  <Select id="countries" required className="select-rounded">
                    <option>Rajkot</option>
                    <option>Ahemedabad</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="col-span-12 flex gap-3">
              <Button color={'primary'}>Submit</Button>
              <Button color={'error'}>Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
